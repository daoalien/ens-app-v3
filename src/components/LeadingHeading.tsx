import { mq } from '@ensdomains/thorin'
import styled, { css } from 'styled-components'

export const LeadingHeading = styled.div(
  ({ theme }) => css`
    width: calc(100% - calc(${theme.radii.large} * 2));
    margin-left: ${theme.radii.large};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${mq.sm.min(css`
      width: calc(100% - calc(${theme.radii['2xLarge']} * 2));
      margin-left: ${theme.radii['2xLarge']};
    `)}
  `,
)
