import feeding from "../../../Data/Petowner/feeding.json"
function Feeding({ pet }) {
    const feedingInfo = feeding.find(item => item.species === pet.species);

    if (!feedingInfo) {
        return (
            <div className="container text-center my-4">
                <h4 className="text-danger">No feeding information available</h4>
                <p>Please check back later.</p>
            </div>
        );
    }

    return (
        <div className="my-4 feeding">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h2 className="text-center mb-3 text-brown fw-bold">
                        Feeding Table
                    </h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered text-center shadow-sm">
                            <thead className="table-primary">
                                <tr>
                                    <th>Age (years)</th>
                                    <th>Weight</th>
                                    <th>Feed per Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedingInfo.feeding_table.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.age}</td>
                                        <td>{row.weight}</td>
                                        <td>{row.feed_perday}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feeding;