/**
 * behavior/entities/format/components/genetics.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:45.684Z
 */

/**
 * The range of positive integer allele values for this gene. Spawned mobs will have a random number in this range assigned to them.
 */
export type AlleleRange =
  | number
  | {
      /**
       * Lower bound of the vaues.
       */
      range_min?: number;
      /**
       * Upper bound of the vaues.
       */
      range_max?: number;
      [k: string]: unknown;
    };
export type Filters =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec1;
/**
 * All tests in an `all_of` group must pass in order for the group to pass.
 */
export type AllOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * One or more tests in an `any_of` group must pass in order for the group to pass.
 */
export type AnyOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
/**
 * All tests in a `none_of` group must fail in order for the group to pass.
 */
export type NoneOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec1 =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * The target of the event.
 */
export type Target =
  | 'baby'
  | 'block'
  | 'damager'
  | 'other'
  | 'parent'
  | 'player'
  | 'self'
  | 'target';
/**
 * If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with both. Can also be a range of integers.
 */
export type BothAllele =
  | number
  | {
      /**
       * Lower bound of the vaues.
       */
      range_min?: number;
      /**
       * Upper bound of the vaues.
       */
      range_max?: number;
      [k: string]: unknown;
    };
/**
 * If this value is non-negative, compare the mob's main allele with this value for a match. Can also be a range of integers.
 */
export type MainAllele =
  | number
  | {
      /**
       * Lower bound of the vaues.
       */
      range_min?: number;
      /**
       * Upper bound of the vaues.
       */
      range_max?: number;
      [k: string]: unknown;
    };
/**
 * The list of genetic variants for this gene. These check for particular allele combinations and fire events when all of them are satisfied.
 */
export type GeneticVariants = GeneticVariants1[];
/**
 * The list of genes that this entity has and will cross with a partner during breeding.
 */
export type Genes = Gene[];

/**
 * Defines the way a mob's genes and alleles are passed on to it's offspring, and how those traits manifest in the child. Compatible parent genes are crossed together, the alleles are handed down from the parents to the child, and any matching genetic variants fire off JSON events to modify the child and express the traits.
 */
export interface Genetics {
  /**
   * Chance that an allele will be replaced with a random one instead of the parent's allele during birth.
   */
  mutation_rate?: number;
  genes?: Genes;
}
/**
 * The list of genes that this entity has and will cross with a partner during breeding.
 */
export interface Gene {
  allele_range?: AlleleRange;
  genetic_variants?: GeneticVariants;
  /**
   * The name of the gene.
   */
  name?: string;
  [k: string]: unknown;
}
/**
 * The genetic variant for this gene. These check for particular allele combinations and fire events when all of them are satisfied.
 */
export interface GeneticVariants1 {
  birth_event?: BrithEvent;
  both_allele?: BothAllele;
  /**
   * If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with either. Can also be a range of integers.
   */
  either_allele?: number;
  /**
   * If this value is non-negative, compare the mob's hidden allele with this value for a match. Can also be a range of integers.
   */
  hidden_allele?: number;
  main_allele?: MainAllele;
  /**
   * If this value is non-negative, overrides the chance for this gene that an allele will be replaced with a random one instead of the parent's allele during birth. Non-negative values greater than 1 will be the same as the value 1.
   */
  mutation_rate?: number;
  [k: string]: unknown;
}
/**
 * Event to run when this mob is created and matches the above allele conditions.
 */
export interface BrithEvent {
  filters?: Filters;
  /**
   * The event to fire.
   */
  event?: string;
  target?: Target;
}
