import { FC, useState, useEffect } from 'react';

interface Props { 
    triggerId?: string;
    addToCart: any;
};

const ProductModal: FC<Props> = (props) => {
    const triggerId: string = props?.triggerId ?? 'productModal';

    const [item, setItem] = useState(null);

    useEffect(() => {

        $(`#${triggerId}`).on('shown.bs.modal', function (e) {
            //@ts-ignore
            const triggerItem = $(e.relatedTarget).data('item');

            let newItem = { ...item };
            newItem.Href = triggerItem.Href
            newItem.id = triggerItem.id;
            newItem.Name = triggerItem.Name;
            newItem.SalesPrice = triggerItem.SalesPrice;
            newItem.Quantity = 1;

            setItem(newItem);
        });
    }, []);



    const setQuantity = (e) => {

        if (e.target.value && parseInt(e.target.value) > 0) {
            setItem({ ...item, Quantity: parseInt(e.target.value) });
        };

    };

    return (
        <div className="modal" tabIndex={-1} id={triggerId}>
            <div className="modal-dialog modal-xl modal-lg">
                {
                    item
                        ?
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add To Cart</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>Item Name: {item.Name}</div>
                                <div>Item ID: {item.id}</div>
                                <div>Item Price: {item.SalesPrice}</div>
                                <div>Item Quantity: {item.Quantity} </div>
                                <input type="number" min="1" value={item.Quantity} onChange={setQuantity}></input>
                                <button onClick={() => { props.addToCart(item); }} data-dismiss="modal">Add To Cart</button>
                            </div>
                            <a href={`${item.Href}`}>Visit Full Product Page</a>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        :
                        <div className="modal-content"></div>
                }
            </div>
        </div>
    );
};

export default ProductModal;