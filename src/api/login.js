/**
 * Created by hyylsw on 2017/6/14.
 */
import service from "@/api/service";
import Mock from '@/mock/login'

export function login(params) {
    return service({
        method:"POST",
        url:"/login/login",
        data:params
    });
}
