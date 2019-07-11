import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
class Search extends React.Component{
    render(){
        return(
        <form onSubmit={this.props.getNews}>


     <Grid container spacing={3} >
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="standard-with-placeholder"
          name="phrase"
      placeholder="Search for keywords or Country"
          type="search"
   style={{margin:16}}
          InputLabelProps={{
            required: true,
         shrink: true
          }}
        />
      </Grid>
      <Grid item xs={4}>
      <Button fullWidth variant="contained" color="primary" style={{marginTop:13}} type="submit">
        Get News
      </Button></Grid>
   
</Grid>

            {/* <input type="text" name="phrase" placeholder="keywords or country"></input> */}
       
        </form>
        );
       
    }
};
export default Search;