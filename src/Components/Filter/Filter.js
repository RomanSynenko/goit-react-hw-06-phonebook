import s from './Filter.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import action from '../../redux/action';
const Filter = ({ filter, onChange }) => {
    console.log(onChange)
    return (
        <div className={s.search_block}>
            <h2 className={s.title}>Contacts list</h2>
            <input
                className={s.contact_input}
                type="text"
                name='filter'
                value={filter}
                onChange={onChange}
                placeholder='Enter name for your Search'
            />
        </div>
    )
};
const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: e =>
        dispatch(action.filterContact(e.target.value)),
});


Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
