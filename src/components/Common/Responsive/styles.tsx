import React from 'react';
import { Wrapper } from '.';

type Props = {
  children: React.ReactNode;
};

const Responsive: React.FC<Props> = ({ children }: Props) => (
  <Wrapper>{children}</Wrapper>
);

export default Responsive;
