import Cookie from 'js-cookie'
import { signIn, verify } from './requests/auth'

export const login = async (user, pass) => {
    //Cookie.set("token", token)
    const res = await signIn(user, pass);
    if (res.status === 200) {
        Cookie.set("token", res.token);
        return true;
    } else {
        return false;
    }
};

export const isAuthenticated = async () => {
    // return true if user is authentic
    return await verify() === 200;
}

export const logout = () => {
    Cookie.set("token", "");
}