import { notification } from 'antd';
import { ZodError } from 'zod';

export interface Err {
  name: string;
  response: string;
  message: MessageChannel;
}

export interface TCWrapperParams {
  ignoreCodes?: number[];
  errorMessage?: string;
  errorDescription?: string;
}

const tryCatchWrapper = async function (f: any, params?: TCWrapperParams) {
  try {
    return await f();
  } catch (e: any) {
    if (e?.name === 'AxiosError') {
      const res = e?.response;
      const message = res?.data?.message || e.message;

      if (params?.ignoreCodes?.includes(res.status)) {
        return res;
      }

      notification.error({
        message: params?.errorMessage ?? 'Ошибка сервера',
        description: params?.errorDescription ?? message,
      });

      return;
    }

    if (e instanceof ZodError) {
      notification.error({
        message: 'Ошибка',
        description: 'Не коректные данные с БД',
      });
    }

    console.error(e);
  }
};

export default tryCatchWrapper;
