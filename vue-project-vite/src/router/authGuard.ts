import { AdapterApiService } from '@/pages';
import * as Routes from "./routerNames";
// import UserType from '@/api/main/models/Enums/UserType';
// import EnumTypeIdentified from '@/api/main/models/Enums/EnumTypeIdentified';

export async function authGuard(to, from, next) {
  // const response = await AdapterApiService.getInstance().getCurrentUser();
  debugger
  // Проверяем, требует ли маршрут авторизации
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("requiresAuth");

    // Если пользователь не авторизован — перенаправляем на страницу входа
    // if (!response.IsSuccess) {
    //   return next({ name: 'Login' });
    // }
    //   const { UserRole, IdentifiedStatus, FirstName, LastName } = response.Value;
    //   const UserRoleText = (UserRole == UserType.Legal) ? 'legal' : 'natural';


    //   // Проверяем наличие specialAccess для типа пользователя
    //   const specialAccess = to.meta.specialAccess && to.meta.specialAccess[UserRoleText];

    //   // Если specialAccess существует и текущий статус идентификации пользователя не соответствует требуемому
    //   if (specialAccess && !specialAccess.includes(IdentifiedStatus)) {
    //     // Перенаправляем пользователя на страницу по умолчанию в зависимости от типа пользователя
    //     if (UserRole == UserType.Legal)
    //       return next({
    //         name: "profile-identification-legal",
    //       });
    //     if (UserRole == UserType.Natural && !(FirstName && LastName))
    //       return next({
    //         name: Routes.USERIDENTIFICATIONSIMPLE,
    //       });
    //     else {
    //       return next({
    //         name: Routes.NATURALPERSON_PROFILE_IDENTIFICATION,
    //       });
    //     }
    //   }

    //   if (IdentifiedStatus == 0 && to.name == "naturalperson-balance") {
    //     return next({name:Routes.NATURALPERSON_PROFILE_IDENTIFICATION})
    //   }
    // }

    // Если маршрут не требует авторизации или все условия выполнены, разрешаем переход
    return
  };
  next();
}
