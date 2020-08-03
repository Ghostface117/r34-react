import React, { useState, useEffect, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import "./Tag.css";
import api from "../../misc/api";
import TypeIcon from "../../icons/TypeIcon";
import { ArrowIcon } from "../../icons/Icons";
import { prettifyTagname } from "./tagUtils";
import { formatCount } from "../../misc/formatting";
import TagDataClass from "../../data/Tag";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveTags,
  selectAliasesByTagName,
} from "../../redux/selectors";
import { addAliases, removeTag, addTag } from "../../redux/actions";
import { ThemeType } from "../../misc/theme";

const dropdownBorderRadius = (collapsed: boolean, theme: ThemeType) =>
  collapsed
    ? theme.dimensions.borderRadius
    : `${theme.dimensions.borderRadius} ${theme.dimensions.borderRadius} 0 0`;

const switchingColors = (active: boolean, theme: ThemeType) => {
  const fg = active ? theme.colors.backgroundColor : theme.colors.accentColor;
  const bg = active ? theme.colors.accentColor : theme.colors.backgroundColor;

  return css`
    color: ${fg};
    background-color: ${bg};
    border: ${theme.colors.accentColor} ${theme.dimensions.borderWidth} solid;
    transition: background-color 0.4s ease-in-out;

    cursor: pointer;

    :hover,
    :focus,
    :active {
      border-color: ${theme.colors.backgroundColor2};
      color: ${theme.colors.backgroundColor2};

      i {
        color: ${theme.colors.backgroundColor2};
      }
    }
  `;
};

export const TagWrapper = styled.div(
  (props: {
    active: boolean;
    collapsed: boolean;
    onMouseLeave: MouseEventHandler;
    theme: ThemeType;
  }) =>
    css`
      display: inline-block;
      padding: 0.25rem;
      border-radius: ${dropdownBorderRadius(props.collapsed, props.theme)};
      font-size: 14px;
      line-height: 1.2;
      vertical-align: baseline;
      margin: ${props.theme.dimensions.spacing};
      ${switchingColors(props.active, props.theme)}
    `
);

const IconWrapper = styled.span(
  (props: { left?: boolean; right?: boolean }) => css`
    ${props.left ? "margin-right: 5px;" : ""}
    ${props.right ? "margin-left: 5px;" : ""}
  `
);

interface TagProps extends TagDataClass {
  loadAliases: boolean;
}

type TagLike = {
  name: string;
  posts: number;
};

function Tag(props: TagProps) {
  const { name, count, modifier, types, loadAliases } = props;
  const activeTags = useSelector(selectActiveTags);
  const aliases = useSelector(selectAliasesByTagName(name));
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadAliases && activeTags[name])
      api.getAliases(name).then((newAliases: TagLike[]) => {
        newAliases.sort((a, b) => b.posts - a.posts);
        const filtered = newAliases
          .filter((alias) => !activeTags[alias.name])
          .map((alias) => new TagDataClass(alias.name, [], alias.posts));
        dispatch(addAliases(filtered, name));
      });
  }, [loadAliases, name, activeTags, dispatch]);

  const isActive = Boolean(activeTags[name]);
  const showAliases = loadAliases && aliases && aliases.length > 0;

  return (
    <TagWrapper
      active={isActive}
      collapsed={collapsed}
      onMouseLeave={() => setCollapsed(true)}
    >
      <TypeIcon types={types} left />
      <TagText name={name} count={count} modifier={modifier} types={types} />
      {showAliases && (
        <>
          <IconWrapper right onClick={() => setCollapsed(!collapsed)}>
            <ArrowIcon />
          </IconWrapper>
          <div className={"dropdown-list" + (!collapsed ? " visible" : "")}>
            {aliases.map(({ name, count }) => (
              <Alias key={"t_" + name} name={name} count={count} />
            ))}
          </div>
        </>
      )}
    </TagWrapper>
  );
}

function TagText(props: TagDataClass) {
  const { name, count, modifier, types } = props;
  const dispatch = useDispatch();
  const tagname = prettifyTagname(name);
  const text = count ? `${tagname} (${formatCount(count)})` : tagname;
  const activeTags = useSelector(selectActiveTags);

  const onClick = () =>
    activeTags[name]
      ? dispatch(removeTag(new TagDataClass(name, types, count)))
      : dispatch(addTag(new TagDataClass(name, types, count)));

  return (
    <span onClick={onClick} onKeyDown={(e) => e.keyCode === 32 && onClick()}>
      {modifier === "-" ? <s>{text}</s> : text}
    </span>
  );
}

function Alias(props: TagDataClass) {
  const { name, count } = props;
  return (
    <div className="alias">
      <TagText name={name} count={count} />
    </div>
  );
}

export default Tag;
