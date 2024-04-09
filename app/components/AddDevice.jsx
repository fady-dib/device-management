'use client'
import addDevice from '../actions/AddDevice';
import React, { useRef } from 'react';


const AddDevice = () => {
    const ref = useRef (null)

    return (
     <>
            <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Device</h2>
                <form ref={ref}
                    action={async (formData) => {
                        await addDevice(formData)
                        ref.current?.reset()
                    }} className="space-y-6" >
                    <div>
                        <label htmlFor="device-name" className="block text-sm font-medium text-gray-700">
                            Device Name:
                        </label>
                        <input
                            id="device-name"
                            type="text"
                            name="name"
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="device-brand" className="block text-sm font-medium text-gray-700">
                            Brand:
                        </label>
                        <input
                            id="device-brand"
                            type="text"
                            name="brand"
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Device
                    </button>
                </form>
            </div>
      </>
    );
}

export default AddDevice
