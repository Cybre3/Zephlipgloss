const InfoCard = (props) => {
  return (
    <div class="card p-3" style={{ maxWidth: "2500px", height: "450px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={props.image} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">About Me</h5>
            <p class="card-text">
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam
              blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
              rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
              officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
              debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
