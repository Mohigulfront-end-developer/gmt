import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../redux/login';

const Settings = () => {

     const dispatch = useDispatch();
   const navigate = useNavigate()

   const logout = () => {
    dispatch(handleLogout());
    navigate("/");
   }
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-[18px] font-semibold">Настройки</h3>
        <div className="w-[75%]">
          <div className="flex gap-[150px]">
            <div className="">
              <h3 className="text-[18px] font-semibold mb-[20px]">
                Показывать в профиле:
              </h3>
              <div className="flex gap-3">
                <input type="checkbox" />
                <label className="text-[16px] font-medium">Имя</label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" />
                <label className="text-[16px] font-medium">Фамилия</label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" />
                <label className="text-[16px] font-medium">Телефон</label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" />
                <label className="text-[16px] font-medium">Email</label>
              </div>
            </div>
            <div className="">
              <h3 className="text-[18px] font-semibold mb-[20px]">
                Получать рассылку по темам:
              </h3>
              <div className="flex gap-3">
                <input type="checkbox" />
                <label className="text-[16px] font-medium">
                  Скидки и акции
                </label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" />
                <label className="text-[16px] font-medium">
                  Снизилась цена на избранное
                </label>
              </div>
            </div>
          </div>
          <button onClick={logout} className="bg-[#088269] text-[#F8F7F3] px-6 py-2 rounded-full my-[100px] w-[200px]">
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings