import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

class CountryTabs extends React.Component{
    
    render(){
        return(
            <div>
        <AppBar position="static">
            <Tabs
            indicatorColor="secondary"
            textColor="primary"
            centered>
                <Typography variant="title" color="inherit">
        <Tab onClick={this.props.getCA} label="CANADA"/>
        <Tab onClick={this.props.getUS} label="US"/>
        <Tab onSubmit={this.props.getNews} label="Get Results" />
        <Tab onClick={this.props.getBR} label="BRAZIL"/>
        <Tab onClick={this.props.getIN} label="INDIA"/>
            </Typography>
               
                </Tabs>
        </AppBar>
      
        </div>
        );
       
    }

   



};
export default CountryTabs;



