import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionItem(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={props.title}>What is the interest rate ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Relative and competitive ranging from  5% to 10% depending on the Amount requested. The higher the amount d lower the interest and the lower the amount the higher the interest rates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={props.title}>Can one repay loan in installments?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes instalment payment is acceptable
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={props.title}>Can loan be collected without a collateral?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All loans are collateral backed but in some cases verifiable guarantor are accepteds
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={props.title}>What is the time frame to repay loan ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Maximum duration is 90 days.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
