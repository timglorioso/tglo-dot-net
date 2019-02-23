import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'initial'};
  align-items: ${props => props.alignItems || 'initial'};
  justify-content: ${props => props.justifyContent || 'initial'};
  & > *:not(:last-child) {
    margin-right: ${props => props.flexDirection === 'column' ? 'initial' : props.itemSpacing};
    margin-bottom: ${props => props.flexDirection === 'column' ? props.itemSpacing : 'initial'};
  }
  @media (max-width: 1200px) {
    flex-direction: ${props => props.isResponsive ? 'column' : props.flexDirection || 'initial'};
    & > *:not(:last-child) {
      margin-right: ${props => props.isResponsive ? 'initial' : props.itemSpacing};
      margin-bottom: ${props => props.isResponsive ? props.itemSpacing : props.flexDirection === 'column' ? props.itemSpacing : 'initial'};
    }
  }
  width: ${props => props.fillWidth ? '100%' : 'unset'};
  height: ${props => props.fillHeight ? '100%' : 'unset'};
`

export default FlexBox
