import { code, bow, gamepad } from '../assets/svg';

const Interests = ({ translate }) => (
  <div className='row mt-md-5'>
    <h1 className='col-12 text-primary'>{translate('interests title')}</h1>

    <div className='m-4'>
      <h4 className='d-flex align-items-center text-info'>
        <img src={code} width='30' alt='coding' />{' '}
        {translate('programming title')}
      </h4>
      <p className='d-inline lead'> {translate('programming text')}</p>
    </div>

    <div className='m-4'>
      <h4 className='d-flex align-items-center text-info'>
        <img src={bow} width='30' alt='bow' /> {translate('archery title')}
      </h4>
      <p className='d-inline lead'> {translate('archery text')}</p>
    </div>

    <div className='m-4'>
      <h4 className='d-flex align-items-center text-info'>
        <img src={gamepad} width='30' alt='gamepad' className='mr-1' />{' '}
        {translate('pc building')}
      </h4>
      <p className='d-inline lead'> {translate('pc building text')}</p>
    </div>
  </div>
);

export default Interests;
