/**
 * Date: 15/07/2024
 * Time: 4:35:00 PM
 * Copyright (C) 2023-2024 Saifur Rahman
 */

import { User } from "./layer";

declare global {
  type UserId = User.user['id'];

}