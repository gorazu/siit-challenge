import styled from 'styled-components';

export type TagProps = {
    selected?: boolean;
};

export const Tag = styled.button<TagProps>`
    background-color: ${({ selected }) => (selected ? '#8e44ad' : '#fcfcfc')};
    padding: 0.2rem 1rem;
    border-radius: 12px;
    color: ${({ selected }) => (selected ? 'white' : '#8e44ad')};
    border: 1px solid #e0e0e0;
    cursor: pointer;
`;
