
import React,{useEffect} from "react";
// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// reactstrap components
import {useHistory} from 'react-router-dom'
import {

  Container,
  Row,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "../components/Headers/Header.js";

const Index = (props) => {

  const history = useHistory();
	useEffect(() => {
		if (localStorage.getItem("user") === null) {
			history.push('/auth/login')
		}
	},[])
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>

        </Row>
      </Container>
    </>
  );
};

export default Index;
