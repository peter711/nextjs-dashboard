import {
  DummyComponent,
  DummyComponentWithContext,
} from '@/app/ui/dummy/dummy-component';
import DummyComponentServer from '@/app/ui/dummy/dummy-component-server';

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { message: 'Hello world!!!' };
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <DummyComponentServer />
      <DummyComponent>
        <DummyComponentServer />
      </DummyComponent>
      <DummyComponentWithContext>
        <DummyComponentServer />
      </DummyComponentWithContext>
      <p>{data.message}</p>
    </div>
  );
}
