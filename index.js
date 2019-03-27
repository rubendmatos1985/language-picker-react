import React from 'react';
import Image from './components/Image';
import franceFlag from './images/france.png';
import germanyFlag from './images/germany.png';
import italyFlag from './images/italy.png';
import portugalFlag from './images/portugal.png';
import spainFlag from './images/spain.png';
import ukFlag from './images/united-kingdom.png';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

/* IF MORE LANGUAGES ARE ADDED YOU 
  MUST TO ADD THE NAME IN THE PROPERTY
  SET OF LANGAUGES 
  WITH THE FORMAT ISO 639-1 */



class LanguagePicker extends React.Component{
  state = {
    anchorEl: null,
    fr: franceFlag,
    de: germanyFlag,
    it: italyFlag,
    pt: portugalFlag,
    es: spainFlag,
    en: ukFlag

  };

  handleClick = (event) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget
    });
  };

// MUI 
 MUIProblemFixer = (element) =>
    (element.target.childNodes.length > 0)
      ? element.target.firstChild.alt
      : element.target.alt
  
  handleClose = (e) => {
    const lang = this.MUIProblemFixer(e)
    this.props.actionToDispatch(lang)
    this.setState({
      ...this.state,
      anchorEl: null
    });
  };
  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Image alt={this.props.currentLanguage} src={this.state[this.props.currentLanguage]} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {
            this.props.setOfLanguages.map(
              (lang, index) =>
                lang.toLowerCase() !== this.props.currentLanguage &&
                <MenuItem
                  key={index}
                  onClick={this.handleClose}>
                  <Image alt={lang} src={this.state[lang]} />
                </MenuItem>
            )
          }
        </Menu>
      </div>
    );
  }
}

LanguagePicker.propTypes ={
  currentLanguage: PropTypes.string.isRequired,
  actionToDispatch: PropTypes.func.isRequired,
  setOfLanguages: PropTypes.array.isRequired
}

export default LanguagePicker;
  

