import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RootContainer = styled('div')({
  backgroundColor: '#009090',
 
  padding: '5%',
});

const RowContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '16px',
});

const AccordionContainer = styled(Accordion)({
  flex: '0 0 48%',
});

const ProductVitaFAQs = () => {
  // Sample accordion content
  const accordionItems = [
    { title: 'Accordion 1', content: 'Content for Accordion 1' },
    { title: 'Accordion 2', content: 'Content for Accordion 2' },
    { title: 'Accordion 3', content: 'Content for Accordion 3' },
    { title: 'Accordion 4', content: 'Content for Accordion 4' },
    { title: 'Accordion 5', content: 'Content for Accordion 5' },
    { title: 'Accordion 6', content: 'Content for Accordion 6' },
    { title: 'Accordion 7', content: 'Content for Accordion 7' },
    { title: 'Accordion 8', content: 'Content for Accordion 8' },
  ];

  // Maintain separate state for each accordion item
  const [expandedAccordion, setExpandedAccordion] = useState({});

  const handleChange = (index) => (event, isExpanded) => {
    setExpandedAccordion((prevExpanded) => ({
      ...prevExpanded,
      [index]: isExpanded ? index : false,
    }));
  };

  return (
    <RootContainer>
      {/* Organize accordion items in rows */}
      {accordionItems.map((item, index) => (
        (index % 2 === 0) && ( // Start a new row every two accordion items
          <RowContainer key={index}>
            <AccordionContainer expanded={expandedAccordion[index] === index} onChange={handleChange(index)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.content}</Typography>
              </AccordionDetails>
            </AccordionContainer>
            {accordionItems[index + 1] && ( // Check if there's a second accordion in the row
              <AccordionContainer expanded={expandedAccordion[index + 1] === index + 1} onChange={handleChange(index + 1)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{accordionItems[index + 1].title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{accordionItems[index + 1].content}</Typography>
                </AccordionDetails>
              </AccordionContainer>
            )}
          </RowContainer>
        )
      ))}
    </RootContainer>
  );
};

export default ProductVitaFAQs;
