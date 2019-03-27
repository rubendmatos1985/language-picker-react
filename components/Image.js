import React from 'react';
import { createStyles, withStyles } from '@material-ui/core'

const styles = theme => createStyles({
  image: {
    height: "1.5em",
    width: "1.5em"
}
})

const Image = ({ src, classes, alt }) => 
  <img className={classes.image} alt={alt} src={src} />
    

export default withStyles(styles)(Image)