import { Grid } from "@mui/material"
export default function PowerText() {
    return (<div style={{ display: 'flex', justifyContent: 'center', lineHeight: '3.5rem', width: '90%', marginBottom: "8%" }}>
        <div style={{ width: '100%', cursor: 'pointer' }}>

            <div style={{ fontSize: '3.8rem', color: "rgb(19, 38, 68)", fontWeight: 620, textDecoration: 'none', margin: 0, padding: 0, lineHeight: '4rem', marginLeft: "1%", textAlign: 'left' }}>Powering every industry.   </div>
            <div style={{ fontSize: '3.8rem', color: "rgb(19, 38, 68)", fontWeight: 620, textDecoration: 'none', margin: 0, padding: 0, lineHeight: '4rem', marginLeft: "1%" }}>Powering all disruptors.</div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontWeight: 600, marginTop: '1%', fontSize: 18, color: "grey",cursor:"pointer" }}>


                <div style={{ marginRight: "4%", color: "rgb(19 100 241)" }} >E-commerce</div>
                <div style={{ marginRight: "4%", }} >Education</div>
                <div style={{ marginRight: "4%", }} >BFSI</div>
                <div style={{ marginRight: "4%", }} >SaaS</div>
                <div style={{ marginRight: "4%", }} >Freelance</div>

            </div>
        </div>
    </div>)
}