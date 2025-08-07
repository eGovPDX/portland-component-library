import React, { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableHeaderCell, 
  TableBody, 
  TableRow, 
  TableCell, 
} from './index';
import { Tag } from '../Tag';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'A table shows information in columns and rows. Tables help logically organize information and group like things together, and they make it easier to understand complex content.',
      },
    },
  },
};

// Sample data for examples
const sampleData = [
  { 
    id: 1,
    title: 'Declaration of Independence', 
    description: 'Statement adopted by the Continental Congress declaring independence from the British Empire.', 
    year: 1776 
  },
  { 
    id: 2,
    title: 'Bill of Rights', 
    description: 'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.', 
    year: 1791 
  },
  { 
    id: 3,
    title: 'Declaration of Sentiments', 
    description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.', 
    year: 1848 
  },
  { 
    id: 4,
    title: 'Emancipation Proclamation', 
    description: 'An executive order granting freedom to slaves in designated southern states.', 
    year: 1863 
  },
];

// Default bordered table
export const Default = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Document title</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Year</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sampleData.map((item) => (
        <TableRow key={item.id}>
          <TableCell header scope="row">{item.title}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.year}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

// Borderless table
export const Borderless = () => (
  <Table bordered={false}>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Document title</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Year</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sampleData.map((item) => (
        <TableRow key={item.id}>
          <TableCell header scope="row">{item.title}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.year}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

// Striped table
export const Striped = () => (
  <Table striped>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Document title</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Year</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sampleData.map((item) => (
        <TableRow key={item.id}>
          <TableCell header scope="row">{item.title}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.year}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

// Sortable table
export const Sortable = () => {
  const [data, setData] = useState(sampleData);
  const [sortConfig, setSortConfig] = useState({ column: null, direction: null });

  const handleSort = (column, direction) => {
    const sortedData = [...data].sort((a, b) => {
      if (direction === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setData(sortedData);
    setSortConfig({ column, direction });
  };

  return (
    <Table sortConfig={sortConfig} onSort={handleSort}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell sortKey="title">Document title</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell sortKey="year">Year</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell 
              header 
              scope="row"
              data-sort-column={sortConfig.column === 'title'}
            >
              {item.title}
            </TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell data-sort-column={sortConfig.column === 'year'}>
              {item.year}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

// Scrollable table with many columns
export const HorizontallyScrollable = () => {
  const extendedData = sampleData.map(item => ({
    ...item,
    type: 'Historical Document',
    location: 'National Archives',
    status: 'Preserved',
    digitized: 'Yes',
    publicAccess: 'Available',
    category: 'Government',
    pages: Math.floor(Math.random() * 100) + 1,
    condition: 'Good'
  }));

  return (
    <>
      <p style={{ marginBottom: '16px', fontStyle: 'italic' }}>
        This table shows horizontal scrolling on larger screens (&gt; 640px) and automatically stacks on mobile screens (&lt; 640px). 
        Try resizing your browser window to see the responsive behavior.
      </p>
      <Table scrollable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Document title</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Year</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Digitized</TableHeaderCell>
            <TableHeaderCell>Public Access</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Pages</TableHeaderCell>
            <TableHeaderCell>Condition</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody headers={['Document title', 'Type', 'Description', 'Year', 'Location', 'Status', 'Digitized', 'Public Access', 'Category', 'Pages', 'Condition']}>
          {extendedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell header scope="row">{item.title}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.digitized}</TableCell>
              <TableCell>{item.publicAccess}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.pages}</TableCell>
              <TableCell>{item.condition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

// Sticky header table (requires scrollable content)
export const StickyHeader = () => {
  // Generate more rows to demonstrate sticky header
  const manyRows = [];
  for (let i = 0; i < 20; i++) {
    manyRows.push(...sampleData.map((item, index) => ({
      ...item,
      id: `${i}-${index}`,
      title: `${item.title} (Copy ${i + 1})`
    })));
  }

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      <Table stickyHeader>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Document title</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Year</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {manyRows.map((item) => (
            <TableRow key={item.id}>
              <TableCell header scope="row">{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Complex table with all features
export const ComplexExample = () => {
  const [data, setData] = useState(sampleData);
  const [sortConfig, setSortConfig] = useState({ column: null, direction: null });

  const handleSort = (column, direction) => {
    const sortedData = [...data].sort((a, b) => {
      if (direction === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setData(sortedData);
    setSortConfig({ column, direction });
  };

  return (
    <Table 
      striped 
      scrollable 
      sortConfig={sortConfig} 
      onSort={handleSort}
    >
      <TableHeader>
        <TableRow>
          <TableHeaderCell sortKey="title">Document title</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell sortKey="year">Year</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell 
              header 
              scope="row"
              data-sort-column={sortConfig.column === 'title'}
            >
              {item.title}
            </TableCell>
            <TableCell>Historical Document</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell data-sort-column={sortConfig.column === 'year'}>
              {item.year}
            </TableCell>
            <TableCell>
              <Tag>{index % 2 === 0 ? 'Archived' : 'Active'}</Tag>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};