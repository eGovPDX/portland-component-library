import React from 'react';
import { HeroGlobal } from './HeroGlobal';
import { Button } from '../Button/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/HeroGlobal',
  component: HeroGlobal,
  parameters: {
    layout: 'fullscreen',
  },
};

const mockImage = {
  src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&h=900&q=80',
  alt: 'A wooden deck with patio furniture and potted plants'
};

const mockTags = ['Permits', 'Construction'];

const ActionButton = () => (
  <Button variant="primary" endIcon={faArrowRight}>
    See your project requirements
  </Button>
);

export const Default = {
  args: {
    title: 'Residential Decks',
    description: 'Building a deck in Portland enhances your outdoor space, offering a great spot for relaxation, entertainment, and enjoying the seasons. A deck also adds value to your home.',
    tags: mockTags,
    image: mockImage,
    actionButton: <ActionButton />
  }
};

export const WithoutImage = {
  args: {
    title: 'Residential Decks',
    description: 'Building a deck in Portland enhances your outdoor space, offering a great spot for relaxation, entertainment, and enjoying the seasons. A deck also adds value to your home.',
    tags: mockTags,
    actionButton: <ActionButton />
  }
};

export const WithoutTags = {
  args: {
    title: 'Residential Decks',
    description: 'Building a deck in Portland enhances your outdoor space, offering a great spot for relaxation, entertainment, and enjoying the seasons. A deck also adds value to your home.',
    image: mockImage,
    actionButton: <ActionButton />
  }
};

export const WithoutButton = {
  args: {
    title: 'Residential Decks',
    description: 'Building a deck in Portland enhances your outdoor space, offering a great spot for relaxation, entertainment, and enjoying the seasons. A deck also adds value to your home.',
    tags: mockTags,
    image: mockImage
  }
};
