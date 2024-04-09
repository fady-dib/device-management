import AddDevice from './components/AddDevice';
import Filter from './components/Filter';
import supabase from './config/supabase';



async function getData() {
  'use server'
  const { data, error } = await supabase.from('devices').select();

  if (error) {
    throw new Error('Failed to fetch data');
  }

  return data;

}

export default async function Home() {

  const data = await getData()

  return (
    <main>
     <Filter initialData={data}></Filter>
      <AddDevice></AddDevice>

    </main>
  );
}
