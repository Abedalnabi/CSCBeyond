import Text from './control/Text';
import TextArea from './control/TextArea';
import Password from './control/Password';
import DatePicker from './control/DatePicker';

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'text':
      return <Text {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'password':
      return <Password {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    default:
      console.log('Add correct controller');
  }
};

export default FormControl;
