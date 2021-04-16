export default function Square({ client, index}) {

  return (
    <>
      <div className={`square ${(index == 2 || index == 9) && 'span-2'}`} key={client.sys.id}>
        <div className="square__wrapper">
          <img className="square__image" src={'https:' + client.fields.logo.fields.file.url} />
        </div>
        {client.fields.task && <span className="square__task">{client.fields.task}</span>}
      </div>
    </>
  );
}