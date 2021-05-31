import React from 'react';

import { Container } from './styles';

interface Props {
    newsletter: string;
    description: string;
}

const News: React.FC<Props> = ({ newsletter, description }) => {
  return (
    <Container>
        <span>{newsletter}</span>
        <strong>{description}</strong>
    </Container>
  );
}

export default News;