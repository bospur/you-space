import { Button, Form, Input, Select } from 'antd';
import styles from './Purchases.module.scss';
import { getСategoryOptions } from './helpers/getСategoryOptions';
import { useForm } from 'antd/es/form/Form';
const TITLE = 'Добавить покупку';

const Purchases = () => {
  const [form] = useForm();

  return (
    <div className={styles.wrapper}>
      <h2>Добавить затрату</h2>
      <Form form={form} layout="vertical" size="large">
        <Form.Item label="Категория" name="category">
          <Select options={getСategoryOptions()} />
        </Form.Item>
        <Form.Item label="Сумма" name="amount">
          <Input />
        </Form.Item>
      </Form>
      <Button type="primary" size="large">
        Отправить
      </Button>
    </div>
  );
};

export default Purchases;
