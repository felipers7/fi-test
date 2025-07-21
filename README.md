This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🔥 Recent Updates - Database View Support for Projections

### Database View Handling in Formulas
The proyecciones API now supports database views (vw_) and parameter references (p_) in formulas:

#### Example Formula
```sql
"vw_inversiones_proyeccion * p_PROY_INVERSION"
```

#### How it Works
1. **View Detection**: When a formula contains `vw_[name]`, the system detects it as a database view reference
2. **Dynamic Query**: For each year being projected, the system queries the view: 
   ```sql
   SELECT inversion FROM vw_inversiones_proyeccion WHERE anio = [year]
   ```
3. **Parameter Resolution**: When a formula contains `p_[name]`, the system fetches the parameter value:
   ```sql
   SELECT prmt_valor FROM parametros WHERE prmt_codigo = [name] AND prmt_ano IS NULL
   ```
4. **Formula Evaluation**: The view values and parameters are substituted into the formula before evaluation

#### Database Structure Added
- **New Parameter**: `PROY_INVERSION` (projection factor for investments)
- **New Formula**: `inversiones` (base investment formula using account '100015')
- **New Projection Formula**: `inversiones_proyeccion` (uses view + parameter)

#### API Usage
```javascript
// Fetch inversiones projections
GET /api/proyecciones?title=INVERSIONES&startYear=2025&endYear=2029

// System automatically uses:
// - formulaType: 'inversiones_proyeccion' 
// - paramCode: 'PROY_INVERSION'
// - Resolves vw_inversiones_proyeccion for each year
```

#### Benefits
- **Dynamic Data**: Projections use real-time view data instead of hardcoded values
- **Flexible Parameters**: Easy to adjust projection factors in the database
- **Scalable**: Can add more views and parameters without code changes
- **Year-Specific**: Each year gets its own view value from the database
