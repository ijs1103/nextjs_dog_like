import useSWR from "swr";

export default () => {
  const DOG_URL = 'https://dogs-api.nomadcoders.workers.dev';
  const { data, mutate, error } = useSWR(DOG_URL);
  const onClick = () => {
    mutate();
  };
  const toggleLike = () => {
    if(!data) return;
    mutate({...data, isLiked: !data.isLiked}, false);
  };
  return (
    <>
      <video width={500} height={500} src={data?.url} autoPlay controls muted />
      <div style={{'width': '500px', 'display': 'flex', 'marginTop': '30px', 'justifyContent': 'space-between'}}>
        <button onClick={onClick}>New Dog</button>
        <button onClick={toggleLike}>{data?.isLiked ? 'Like' : 'UnLike'}</button>
      </div>
    </>
  );

};
