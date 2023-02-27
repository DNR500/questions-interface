import styled from 'styled-components';
import {
  baseControlStyles,
  TouchedProps,
} from '@/components/Form/FormControlBase/styles';

// import { BaseControl } from '../FormControlBase/styles';

// export const BaseSelect = styled(BaseControl).attrs({ as: 'select' })``;
//

export const BaseSelect = styled.select<TouchedProps>`
  ${baseControlStyles}
`;
