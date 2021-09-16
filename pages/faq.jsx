import { H2title } from "element/Heading";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
  return (
    <Container sx={{ mt: 13, mb: 13 }}>
      <H2title useMarginTop>Frequently Ask Question</H2title>
      <Container maxWidth="sm">
        {FaqStoneDistributor.map(({ question, answer }, index) => (
          <Accordion key={question}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`${question}${index}`}
              id={`${question}${index}`}
            >
              <Typography color="text.secondary">{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Container>
  );
};

export default Faq;

export const FaqStoneDistributor = [
  {
    question: `What is the quartz stone slab size?`,
    answer: `Depend on colour. There are 2 options. 3040 mm x 1440 mm or 3200 mm x 1600 mm approximately. We encourage you to visit our factory to see the actual size and colour.`,
  },
  {
    question: `What is the thickness of the quartz stone?`,
    answer: `15 mm / 20 mm`,
  },
  {
    question: `Does your quartz stone slab match International SGS Standard`,
    answer: `Yes!`,
  },
  {
    question: `Does your quartz stone with warranty?`,
    answer: `Yes, 10 years warranty on material`,
  },
  {
    question: `What if I'm looking for specific colour which not availabe in your warehouse?`,
    answer: `If you insist want to look for the colour, please show us the colour sample. We source it for you in China and import to Malaysia. Terms & Conditions are applied`,
  },
];
