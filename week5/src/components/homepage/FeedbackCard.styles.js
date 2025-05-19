// FeedbackSection.styles.js
import styled from "styled-components";

/*
 * 📐 1.5× sizing relative to the original spec
 *   • Wider wrapper + more generous padding
 *   • Larger typography & emoji graphics
 *   • Scaled gaps/margins for balanced whitespace
 */

export const FeedbackCardWrapper = styled.section`
  width: 100%;
  max-width: 1080px;             /* 720 → 1080 */
  background: #1c1c1c;
  padding: 60px 48px;            /* 40/32 → 60/48 */
  border-radius: 40px;
  color: white;
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.1rem;             /* 1.4rem × 1.5 */
  font-weight: bold;
  margin-bottom: 12px;           /* 8px → 12px */
`;

export const Subtitle = styled.p`
  font-size: 1.35rem;            /* 0.9rem × 1.5 */
  color: #ccc;
  margin-bottom: 48px;           /* 32px → 48px */
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;                     /* 16px → 24px */
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1;
  max-width: 300px;              /* 200px → 300px */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmojiImage = styled.img`
  width: 120px;                  /* 80px → 120px */
  height: 120px;
  margin-bottom: 18px;           /* 12px → 18px */
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 1.425rem;           /* 0.95rem × 1.5 */
  margin-bottom: 12px;           /* 8px → 12px */

  &.red {
    color: #ff6370;
  }

  &.blue {
    color: #59b5f2;
  }

  &.yellow {
    background: #ffe500;
    color: black;
    padding: 3px 9px;            /* 2×6 → 3×9 */
    border-radius: 8px;
  }
`;

export const Description = styled.div`
  font-size: 1.275rem;           /* 0.85rem × 1.5 */
  color: #ddd;
  background: #2c2c2c;
  padding: 18px;                 /* 12px → 18px */
  border-radius: 12px;
  margin-top: 12px;              /* 8px → 12px */
`;
