import React from 'react';
import './footer.css';
const RED = '#ff0000';
const BLUE = '#0000ff';
const GRAY = '#678c89';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.submitThemeColor = this.submitThemeColor.bind(this);
  }
  submitThemeColor(color) {
    // lưu giá trị mã màu theme vào Store - redux
    // Xử lý sau
    if (color) {
      console.log('handleChangeTheme');
      this.props.saveColorTheme(color);
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps: ' + JSON.stringify(nextProps));
    document.documentElement.style.setProperty('--main-color', nextProps.themeColor.color);
  }
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="vertical-center">
          <span>Choose Theme: </span>
          <button className="dot red" onClick={() => this.submitThemeColor(RED)} />
          <button className="dot blue" onClick={() => this.submitThemeColor(BLUE)} />
          <button className="dot gray" onClick={() => this.submitThemeColor(GRAY)} />
        </div>
      </div>
    );
  }
}

export default Footer;
