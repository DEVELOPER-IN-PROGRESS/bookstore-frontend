import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
import { Bar , PieChart, Pie, CartesianGrid , BarChart , Legend, Tooltip, ResponsiveContainer , XAxis ,YAxis} from 'recharts'
function AdminHome() {

  const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]
const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];


  return (
    <>
    <AdminHeader />
        <div className="md:grid grid-cols-[1fr_4fr]">
            <AdminSidebar />
            <div className="p-10">
              <div className="flex flex-col gap-y-5 md:grid grid-cols-3">
                <div className="md:px-10 px-5">
                   <div className="bg-blue-900 p-3 flex rounded text-white">
                      <FontAwesomeIcon icon={faBook} className="fa-3x me-2"/>
                      <div className="flex flex-col">
                        <h4 className="text-lg">Total Number of books </h4>
                        <h4 className="text-3xl">100+</h4>
                      </div>
                   </div>
                </div>
                <div className="md:px-10 px-5">
                    <div className="bg-yellow-500 p-3 flex rounded text-white">
                        <FontAwesomeIcon icon={faPeopleGroup} className="fa-3x me-2"/>
                        <div className="flex flex-col">
                          <h4 className="text-lg">Total Number of Users </h4>
                          <h4 className="text-3xl">100+</h4>
                        </div>
                    </div>
                  </div>
                <div className="md:px-10 px-5">
                    <div className="bg-green-900 p-3 flex rounded text-white">
                        <FontAwesomeIcon icon={faPeopleCarry} className="fa-3x me-2"/>
                        <div className="flex flex-col">
                          <h4 className="text-lg">Total Number of Employees </h4>
                          <h4 className="text-3xl">100+</h4>
                        </div>
                    </div>
                </div>
              </div>

              <div className="md:grid grid-cols-2">
              <div className='w-full h-80'>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart  data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className='w-full h-80'>
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart
                  // width="100%" height={250}
                  >
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default AdminHome