'use client';

import { useState, useEffect, useCallback } from 'react';

import api from '_@/api-services/api';

import type { User } from '_@/api-services/auth/auth.type';

export default function UserSection() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
  };

  const onLogin = async () => {
    const { data, error } = await api.auth.login.post({
      body: { username: 'emilys', password: 'emilyspass' },
    });

    if (error) {
      console.log(error);
      return;
    }
    setToken(data.token);
    setIsLogin(true);
    setUser(data);
  };

  const onLogout = useCallback(() => {
    removeToken();
    setIsLogin(false);
    setUser(null);
  }, []);

  const onGetUser = useCallback(async () => {
    const { data, error } = await api.auth.user.get();
    if (error) {
      console.log(error);
      onLogout();
      return;
    }
    setUser(data);
  }, [onLogout]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
      onGetUser();
    }
  }, [onGetUser]);

  return (
    <section className="mx-auto max-w-[1280px] px-4">
      {user && (
        <div className="mb-6 flex items-center gap-2">
          <img src={user.image} alt="" className="size-10 rounded-full object-cover" />
          <p>
            {user.firstName} {user.lastName}
          </p>
        </div>
      )}

      {isLogin ? (
        <button className="rounded-lg bg-purple-500 px-5 py-2 text-white" onClick={onLogout}>
          Logout
        </button>
      ) : (
        <button className="rounded-lg bg-purple-500 px-5 py-2 text-white" onClick={onLogin}>
          Login
        </button>
      )}
    </section>
  );
}
