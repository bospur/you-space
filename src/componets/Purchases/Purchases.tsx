import { Button, Form, Input, Select, notification } from 'antd';
import styles from './Purchases.module.scss';
import { getСategoryOptions } from './helpers/getСategoryOptions';
import { useForm } from 'antd/es/form/Form';
import { FC } from 'react';
import purchasesApi from '../../api/purchases';

const TITLE = 'Добавить покупку';

interface IPurchase {
  setIsUpdate: SetState<boolean>;
}

const Purchases: FC<IPurchase> = ({ setIsUpdate }) => {
  const [form] = useForm();

  const handleAdd = async () => {
    const values = form.getFieldsValue();

    const res = await purchasesApi.createNewPurchase(values);

    if (!res)
      return notification.error({
        message: 'Ошибка',
        description: 'Данные не добавлены в таблицу',
      });

    setIsUpdate(true);
    notification.success({
      message: 'Ок',
      description: 'Запись добавленна',
    });
    form.resetFields();
  };

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
      <Button type="primary" size="large" onClick={handleAdd}>
        Отправить
      </Button>
    </div>
  );
};

export default Purchases;
