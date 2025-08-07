import {clsx} from 'clsx' 
import { twMerge } from 'tailwind-merge'

import React from 'react'

const cn = (...input) => {
  return twMerge(clsx(input));
}

export default cn