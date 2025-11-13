import EmployeeCard from './EmployeeCard';
import SliderWrapper from '@/components/common/SliderWrapper';
import { employees } from '@/data/employees';

const Employees = () => {
  return <SliderWrapper title="Employees" SliderCard={EmployeeCard} data={employees} />;
};

export default Employees;
