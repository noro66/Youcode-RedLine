export default function  Review ({item})  {
    return (
        <>
            <div className="item">
                <div className="user">
                    <div className="pp">
                        <img src={item.user_reviewed.img} className={'rounded'} alt=""/>
                    </div>
                    <div className="info">
                        <span>{item.user_reviewed.username}</span>
                        <div className="country">
                            <img src="/images/icons8-morocco-48.png" className={'rounded'} alt=""/>
                            <span>{item.user_reviewed.city ?? 'Casablanca'}</span>
                        </div>
                    </div>
                </div>
                <div className="stars">
                    {item.star > 0 ? (
                        Array.from({length: item.star}, (_, index) => (
                            <img key={index} src="/images/icons8-star-48.png" alt=""/>
                        ))
                    ) : (
                        <img src="/images/icons8-star-48.png" alt=""/>
                    )}
                    <span>{item.star}</span>
                </div>
                <p>{item.description}</p>
                <div className="helpful">
                    <span>Helpful?</span>
                    <span>Yes</span>
                    <img src="/images/icons8-facebook-like-50.png" alt=""/>
                    <span>No</span>
                    <img src="/images/icons8-dislike-64.png" alt=""/>
                </div>
            </div>
            <hr/>
        </>
    )
}