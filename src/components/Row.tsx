import styled, { css } from "styled-components";

export interface RowProps {
  width?: string;
  height?: string;
  flexWrap?: string;
  gap?: string;
  mr?: string;
  fd?: string;
  ai?: string;
  jc?: string;
  mt?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  cursor?: string;
  br?: string;
  flex?: string;
  overflow?: string;
  mb?: string;
  ml?: string;
  pos?: string;
  zi?: number | string;
  minWidth?: string | string;
  maxWidth?: string | string;
  padding?: string;
  whiteSpace?: string;
}

export const RowCss = css<RowProps>`
  display: flex;
  height: ${(p) => (p.height ? p.height : "")};
  width: ${(p) => (p.width ? p.width : "")};
  padding: ${(p) => (p.padding ? p.padding : "")};
  flex-direction: ${(p) => (p.fd ? p.fd : "row")};
  gap: ${(p) => (p.gap ? p.gap : "")};
  flex: ${(p) => (p.flex ? p.flex : "")};
  align-items: ${(p) => (p.ai ? p.ai : "")};
  justify-content: ${(p) => (p.jc ? p.jc : "")};
  margin-right: ${(p) => (p.mr ? p.mr : "")};
  margin-left: ${(p) => (p.ml ? p.ml : "")};
  margin-bottom: ${(p) => (p.mb ? p.mb : "")};
  margin-top: ${(p) => (p.mt ? p.mt : "")};
  cursor: ${(p) => (p.cursor ? p.cursor : "")};
`;

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${(p) => (p.flexWrap ? p.flexWrap : "")};
  position: ${(p) => (p.pos ? p.pos : "")};
  z-index: ${(p) => (p.zi ? p.zi : "")};
  height: ${(p) => (p.height ? p.height : "")};
  min-width: ${(p) => (p.minWidth ? p.minWidth : "")};
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : "")};
  width: ${(p) => (p.width ? p.width : "")};
  padding: ${(p) => (p.padding ? p.padding : "")};
  flex-direction: ${(p) => (p.fd ? p.fd : "row")};
  gap: ${(p) => (p.gap ? p.gap : "")};
  top: ${(p) => (p.top ? p.top : "")};
  right: ${(p) => (p.right ? p.right : "")};
  bottom: ${(p) => (p.bottom ? p.bottom : "")};
  left: ${(p) => (p.left ? p.left : "")};
  align-items: ${(p) => (p.ai ? p.ai : "")};
  justify-content: ${(p) => (p.jc ? p.jc : "")};
  margin-right: ${(p) => (p.mr ? p.mr : "")};
  border-radius: ${(p) => (p.br ? p.br : "")};
  overflow: ${(p) => (p.overflow ? p.overflow : "")};
  margin-left: ${(p) => (p.ml ? p.ml : "")};
  margin-bottom: ${(p) => (p.mb ? p.mb : "")};
  margin-top: ${(p) => (p.mt ? p.mt : "")};
  white-space: ${(p) => (p.whiteSpace ? p.whiteSpace : "")};
  cursor: ${(p) => (p.cursor ? p.cursor : "")};
`;

export const CRow = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export default Row;
