import { connect } from 'react-redux';
import ConfirmData from './ConfirmData';
import { getBookedData } from '../../../redux/bookingRedux';

const mapStateToProps = (state) => ({
  confirmData: getBookedData(state),
});

export default connect(mapStateToProps)(ConfirmData);
