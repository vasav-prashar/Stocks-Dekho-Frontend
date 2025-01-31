import { AntTabs } from "../components/Tabs/AntTabs"
import { AntTab } from "../components/Tabs/AntTab"
import { TabPanel } from "../components/Tabs/TabPanel"
import {useState} from 'react'
import {Typography} from '@mui/material'
import { TransactionLogCard } from "../components/TransactionLog"
import {Link} from 'react-router-dom'
export const TransactionHistory=()=>{
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div style={{width:'100%'}}>
            <Typography component={Link} to='/' textAlign={'center' } marginBottom={1} sx={{backgroundColor:' #c3defd' , fontSize:22 ,borderRadius:3 , color:'white' , width:'100%' , display:'flex' , justifyContent:'center'}}>Transaction History</Typography>
            <AntTabs  style={{width:'100%'}} value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ marginBottom: 2 }}>
                <AntTab style={{width:'50%'}} label="Buy" />
                <AntTab style={{width:'50%'}} label="Sell" />
            </AntTabs>
            <TabPanel value={value} index={0} >
                <TransactionLogCard/>
            </TabPanel>
            <TabPanel value={value} index={1} >
            <TransactionLogCard/>
            </TabPanel>
        </div>
    )
}