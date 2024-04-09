'use server'
import supabase from '../config/supabase';
import { revalidatePath } from 'next/cache';


const addDevice = async (formData) => {
    'use server';
    try {
        const name = formData.get('name');
        const brand = formData.get('brand');


        const { data, error } = await supabase
            .from('devices')
            .insert([{ name, brand }]);
        if (error) throw error;
        + revalidatePath('')

    } catch (error) {
        console.log(error.message);
    } 
};

export default addDevice