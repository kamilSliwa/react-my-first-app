function DataLoading(props) {
  return (
    <>
      <div className='text-center m-3 text-primary'>
        <div className='spinner-grow text-center' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </>
  );
}

export default DataLoading;
