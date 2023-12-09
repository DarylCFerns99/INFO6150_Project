import React, { Fragment } from 'react'
import { MDBAccordion, MDBAccordionItem, MDBCardText } from 'mdb-react-ui-kit'

const OrdersDisplay = () => {
    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center mb-1">
                <MDBCardText className="lead fw-normal mb-0">Past Orders</MDBCardText>
                {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
            </div>
            <MDBAccordion flush initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </MDBAccordionItem>
            </MDBAccordion>
        </Fragment>
    )
}

export default OrdersDisplay